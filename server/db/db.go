package db

import (
	"fmt"
	"log"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Email string
	Roles []*Role `gorm:"many2many:user_roles;"`
}
type Role struct {
	gorm.Model
	Name     string
	Users    []*User `gorm:"many2many:user_roles;"`
	Subroles []Subrole
}

type Subrole struct {
	gorm.Model
	Username string
	HostID   uint
	RoleID   uint
}

type Host struct {
	gorm.Model
	Name     string
	Hostname string
	Subroles []Subrole
}

var Db *gorm.DB

func Open() error {
	var err error

	if os.Getenv("APP_ENV") == "PRODUCTION" {
		dsn := fmt.Sprintf("host=db user=gorm password=%s dbname=gorm port=5432 sslmode=disable TimeZone=america/los_angeles", os.Getenv("DB_PASSWD"))
		Db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	} else {
		Db, err = gorm.Open(sqlite.Open("test.db"), &gorm.Config{})
	}

	if err != nil {
		log.Fatal(err)
	}

	return err
}

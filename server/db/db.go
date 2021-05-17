package db

import (
	"log"

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

	Db, err = gorm.Open(sqlite.Open("test.db"), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
	}

	return err
}

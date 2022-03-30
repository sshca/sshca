package cmd

import (
	"log"

	"github.com/spf13/cobra"

	"github.com/spf13/viper"
)

// rootCmd represents the base command when called without any subcommands
var rootCmd = &cobra.Command{
	Use:   "sshca-host",
	Short: "Short Desc",
	Long:  `Long Desc`,
	// Uncomment the following line if your bare application
	// has an action associated with it:
	// Run: func(cmd *cobra.Command, args []string) { },
}

// Execute adds all child commands to the root command and sets flags appropriately.
// This is called by main.main(). It only needs to happen once to the rootCmd.
func Execute() {
	cobra.CheckErr(rootCmd.Execute())
}

func init() {
	cobra.OnInitialize(initConfig)
}

// initConfig reads in config file and ENV variables if set.
func initConfig() {

	// Search config in home directory with name ".sshca-client" (without extension).
	viper.AddConfigPath("/etc/ssh")
	viper.SetConfigName(".sshca-config")
	viper.SetConfigType("yaml")
	viper.SafeWriteConfig()

	viper.AutomaticEnv() // read in environment variables that match

	// If a config file is found, read it in.
	err := viper.ReadInConfig()
	if err != nil {
		log.Fatal("Failed to Read Config")
	}
}

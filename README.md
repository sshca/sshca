# SSHCA [![Build](https://github.com/lavalleeale/sshca/actions/workflows/build.yml/badge.svg)](https://github.com/lavalleeale/sshca/actions/workflows/build.yml) [![Publish](https://github.com/lavalleeale/sshca/actions/workflows/publish.yml/badge.svg)](https://github.com/lavalleeale/sshca/actions/workflows/publish.yml)

An SSH Certificate Authority with a simple web interface and easy-to-use command line tool

## Getting Started

### Cloning Repo

1. `git clone https://github.com/sshca/sshca.git`
2. Create project on google cloud console
3. Create .env file in server with `CLIENT_ID`, `CLIENT_SECRET`, `REDIRECT_URI`, `SSH_KEY`, `JWT_SECRET`, and `DB_PASSWD`
4. `cd docker`
5. `docker-compose pull && docker-compose up -d`

### Initial Setup

1. Visit port 80 on the server running docker and sign in with google
2. Add preferred roles, hosts, and users.
3. Click on each host to view installation script (must be run each time hosts permissions are updated)

### Client Usage

1. run `go install github.com/sshca/sshca/sshca-client@latest`
2. Add `CertificateFile /tmp/sshca-key.pub` to `~/.ssh/config`
3. run `sshca-client login`
4. SSH into target server

# SSHCA [![Push](https://github.com/lavalleeale/sshca/actions/workflows/push.yml/badge.svg)](https://github.com/lavalleeale/sshca/actions/workflows/push.yml) [![Publish](https://github.com/lavalleeale/sshca/actions/workflows/publish.yml/badge.svg)](https://github.com/lavalleeale/sshca/actions/workflows/publish.yml)

<img src="https://github.com/sshca/sshca/blob/master/preview.png?raw=true" width="500" />

An SSH Certificate Authority with a simple web interface and easy-to-use command line tool

## Getting Started

### Initial Setup

1. Create .env file in server with `SSH_KEY`, `JWT_PRIVATE`, `JWT_PUBLIC`, `DOMAIN`, and `DATABASE_URL`
2. Build Server
3. Upload server files to cdn (or local server) of choice
4. `yarn start` the server

### Client Usage

1. run `go install github.com/sshca/sshca/sshca-client@latest`
2. Add `CertificateFile /tmp/sshca-key.pub` to `~/.ssh/config`
3. run `sshca-client login`
4. SSH into target server

### Working locally

1. `git clone https://github.com/sshca/sshca.git`
2. Create .env file in server with `SSH_KEY`, `JWT_PRIVATE`, `JWT_PUBLIC`, `DOMAIN`, and `DATABASE_URL`
3. Install all dependancies (`yarn` in server and web directories)
4. Build server `yarn build` Note: NODE_ENV must be set!
5. Start server `yarn start`
6. Start webserver `yarn start`
7. Webserver will be started on port 3000

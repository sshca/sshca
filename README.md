# SSHCA [![Push](https://github.com/lavalleeale/sshca/actions/workflows/push.yml/badge.svg)](https://github.com/lavalleeale/sshca/actions/workflows/push.yml) [![Publish](https://github.com/lavalleeale/sshca/actions/workflows/publish.yml/badge.svg)](https://github.com/lavalleeale/sshca/actions/workflows/publish.yml)

<img src="https://github.com/sshca/sshca/blob/master/preview.png?raw=true" width="500" />

An SSH Certificate Authority with a simple web interface and easy-to-use command line tool

## Getting Started

### Initial Setup

1. Create .env file in server with `SSH_KEY`, `JWT_PRIVATE`, `JWT_PUBLIC`, `DOMAIN`, `DATABASE_URL`, `HOST_VALIDITY_SECONDS`, and `CLIENT_VALIDITY_SECONDS`
2. Build Server
3. Apply database migrations with `yarn workspace server prisma migrate deploy`
4. Upload server files to cdn (or local server) of choice
5. `yarn start` the server

Before applying migrations to an existing database, resolve duplicate `User.email`
values and duplicate non-null `Host.fingerprint` values. The hardening migration
adds unique constraints for both.

### Client Usage

1. run `go install github.com/sshca/sshca/sshca-client@latest`
2. Add `CertificateFile /tmp/sshca-key.pub` to `~/.ssh/config`
3. Run an initial password login to enroll your public key and generate a certificate:
   `sshca-client login --server https://sshca.example.com --email you@example.com --role user@example-host --keyFile ~/.ssh/id_rsa.pub --certFile /tmp/sshca-key.pub`
4. After the first password login has enrolled your key fingerprint, refresh a certificate without a password:
   `sshca-client genCert --server https://sshca.example.com --role user@example-host --privateKeyFile ~/.ssh/id_rsa --certFile /tmp/sshca-key.pub`
   If `--keyFile` is omitted, the client reads the public key from `--privateKeyFile + ".pub"`.
5. SSH into target server

### Working locally

1. `git clone https://github.com/sshca/sshca.git`
2. Create .env file in server with `SSH_KEY`, `JWT_PRIVATE`, `JWT_PUBLIC`, `DOMAIN`, and `DATABASE_URL`
3. Install all dependancies (`yarn` in server and web directories)
4. Build server `yarn build` Note: NODE_ENV must be set!
5. Apply database migrations with `yarn workspace server prisma migrate deploy`
6. Start server `yarn start`
7. Start webserver `yarn start`
8. Webserver will be started on port 3000

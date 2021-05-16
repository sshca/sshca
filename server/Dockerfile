FROM golang:buster
WORKDIR /go/src/project/
RUN go get -u github.com/lavalleeale/sshca/server
EXPOSE 5000
CMD ["server"]
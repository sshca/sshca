FROM golang:buster
WORKDIR /go/src/project/
COPY . .
RUN go build .
EXPOSE 5000
CMD ["/go/src/project/server"]
#!make
build:
	openssl req -newkey rsa:4096 \
            -x509 \
            -sha256 \
            -days 3650 \
            -nodes \
            -out localurl.crt \
            -keyout localurl.key
			
dev:
	yarn proxy & yarn dev:start;

dev:
	yarn proxy & yarn prod:start;

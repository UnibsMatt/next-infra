build:
	docker build -t skillx/home:latest .
run: build
	docker run -d -p 80:80 --restart always skillx/home:latest
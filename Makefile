buildlinux:
	docker build -t fe --platform=linux/amd64 .

push: 
	docker tag fe ducnpjenkins/fe-blog
	docker push ducnpjenkins/fe-blog
run:
	docker run -it -m 256m --cpus=0.5 --name=fe -p 3000:3000 -d ducnpjenkins/fe-blog
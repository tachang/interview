# Typescript-Interview

#### Helpful Tools
* `npm`
* `tsc`
* `docker`
* `helm`

#### Helpful Commands

```shell
npm run start #run the application locally
npm run build #compile from ts to js
npm run serve #run compiled 

docker build . --build-arg NPM_TOKEN=asdf12345 -t nyefan/interview/typescript:latest
docker run nyefan/interview/typescript:latest

helm template interview-typescript -f ./helm/values.yaml ./helm
```
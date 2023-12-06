# Java-Interview

#### Helpful Tools
* a version 17 jdk
* `gradle`
* `docker`
* `helm`

#### Helpful Commands

```shell
./gradlew bootRun #run the application locally
./gradlew bootJar #compile to a runnable jar

docker build . --build-arg ARTIFACTORY_TOKEN=asdf12345 -t nyefan/interview/java:latest
docker run nyefan/interview/java:latest

helm template interview-java -f ./helm/values.yaml ./helm
```
ARG ARTIFACTORY_TOKEN
FROM openjdk:17-oracle

WORKDIR /app
ENV ARTIFACTORY_TOKEN=${ARTIFACTORY_TOKEN}

COPY . .
RUN ./gradlew bootJar

CMD ["java", "-jar", "./build/libs/interview-java-0.0.1-SNAPSHOT.jar"]
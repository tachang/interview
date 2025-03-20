FROM openjdk:17-oracle

WORKDIR /app

# Assume ARTIFACTORY_TOKEN is used by `./gradlew bootJar`
ARG ARTIFACTORY_TOKEN
ENV ARTIFACTORY_TOKEN=${ARTIFACTORY_TOKEN}

COPY . .
RUN ./gradlew bootJar

CMD ["java", "-jar", "./build/libs/interview-java-0.0.1-SNAPSHOT.jar"]
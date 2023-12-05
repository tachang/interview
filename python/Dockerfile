ARG ARTIFACTORY_TOKEN
FROM python:3 as build

WORKDIR /app
ENV ARTIFACTORY_TOKEN=${ARTIFACTORY_TOKEN}

COPY . .
RUN python -m pip install -e .
RUN python -m flask --app interview_python init-db

CMD ["python", "-m", "flask", "--app", "interview_python", "run"]
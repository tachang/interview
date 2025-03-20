FROM python:3

WORKDIR /app

# Assume ARTIFACTORY_TOKEN is used by `pip install`
ARG ARTIFACTORY_TOKEN
ENV ARTIFACTORY_TOKEN=$ARTIFACTORY_TOKEN

COPY . .
RUN python -m pip install -e .
RUN python -m flask --app interview_python init-db

CMD ["python", "-m", "flask", "--app", "interview_python", "run"]
# Interview-Python

#### Helpful Tools

`python3`
`pip3`
`docker`
`helm`

#### Helpful Commands

```shell
python -m venv ./venv
source ./venv/bin/activate
python -m pip install --upgrade pip
python -m pip install pyproject.toml
python -m pip install -e .

python -m flask --app interview_python init-db
python -m flask --app interview_python run

docker build . --build-arg ARTIFACTORY_TOKEN=asdf12345 -t nyefan/interview/python:latest

helm template interview-python -f ./helm/values.yaml ./helm
```

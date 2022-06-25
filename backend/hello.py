from flask import Flask

app = Flase(__name__)

@app.route('/')
def hello():
  return 'Hello World!'
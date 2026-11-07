# Word Counter

Analyze text length, lexical variety and reading time.

## Run

npm test and python -m http.server 8000 (visit http://localhost:8000)

## Example input (JSON)

{
  "text": "Build useful things with clean code."
}

## Expected output fields (JSON)

{
  "words": 6,
  "characters": 36,
  "unique": 6,
  "readingMinutes": 0.03
}

## Engineering

Standalone functional implementation, automated CI tests and no third-party runtime dependencies. Educational portfolio example: review for production readiness before deployment.

MIT License - https://github.com/santdevfull

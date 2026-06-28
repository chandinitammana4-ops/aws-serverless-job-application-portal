# Project Architecture

Frontend
   ↓
API Gateway
   ↓
Lambda
   ↓
DynamoDB
   ↓
CloudWatch

## Workflow

1. User fills the application form.
2. JavaScript sends a POST request.
3. API Gateway receives the request.
4. Lambda processes the request.
5. CloudWatch stores logs for monitoring.
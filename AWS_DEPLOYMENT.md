# AWS Deployment Guide for MediMind

This guide explains how to deploy the MediMind system to AWS according to the infrastructure provided in the `terraform/` directory.

## 1. Prerequisites
- Install **Terraform** on your local machine.
- Configure your **AWS CLI** with `aws configure`.

## 2. Provision Infrastructure
Run these commands in the `terraform/` folder:
```bash
terraform init
terraform plan
terraform apply
```
*This will create the S3 bucket for reports, the RDS Database, and the EC2 Server.*

## 3. Deploy the Containers
1. SSH into your new EC2 instance.
2. Clone your repository: `git clone https://github.com/akshi1227/MediMind.git`.
3. Start the system:
   ```bash
   docker-compose up -d
   ```

## 4. Updates via GitHub Actions
Note that the included `.github/workflows/main.yml` is configured to run tests on every push. You can expand it to automatically deploy to EC2 using the `appleboy/ssh-action`.

---
**MediMind is now Cloud-Ready.**

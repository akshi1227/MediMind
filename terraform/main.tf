# MediMind AWS Infrastructure
provider "aws" {
  region = "us-east-1"
}

# 1. S3 Bucket for Medical Reports
resource "aws_s3_bucket" "reports_bucket" {
  bucket = "medimind-patient-reports-storage"
  
  tags = {
    Name        = "MediMind Reports"
    Environment = "Production"
  }
}

# 2. RDS Instance (PostgreSQL)
resource "aws_db_instance" "medimind_db" {
  allocated_storage    = 20
  db_name              = "medimind"
  engine               = "postgres"
  engine_version       = "14.1"
  instance_class       = "db.t3.micro"
  username             = "admin"
  password             = "medimind2024secure"
  skip_final_snapshot  = true
  publicly_accessible  = true
}

# 3. EC2 Instance for the Main Application
resource "aws_instance" "app_server" {
  ami           = "ami-0c02fb55956c7d316" # Amazon Linux 2
  instance_type = "t2.micro"

  tags = {
    Name = "MediMind-Server"
  }

  user_data = <<-EOF
              #!/bin/bash
              sudo yum update -y
              sudo amazon-linux-extras install docker -y
              sudo service docker start
              sudo usermod -a -G docker ec2-user
              sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
              sudo chmod +x /usr/local/bin/docker-compose
              EOF
}

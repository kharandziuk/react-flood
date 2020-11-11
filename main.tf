variable "aws_access_key" {}
variable "aws_secret_key" {}
variable "bucket_name" {
  default="flood-game"
}

provider "aws" {
  region = "eu-central-1"
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
}

variable "mime_types" {
  default = {
    htm = "text/html"
    html = "text/html"
    css = "text/css"
    js = "application/javascript"
    map = "application/javascript"
    json = "application/json"
  }
}

resource "aws_s3_bucket_policy" "public_access" {
  bucket = aws_s3_bucket.flood_bucket.id

  policy = <<POLICY
{
   "Version":"2012-10-17",
   "Statement":[{
     "Sid":"PublicReadForGetBucketObjects",
       "Effect":"Allow",
       "Principal": "*",
       "Action":[
         "s3:GetObject",
         "s3:PutObject"
       ],
       "Resource":["arn:aws:s3:::${aws_s3_bucket.flood_bucket.id}/*"
       ]
     }
   ]
 }
POLICY
}

resource "aws_s3_bucket" "flood_bucket" {
  bucket = var.bucket_name
  acl    = "public-read"

  tags = {
    Name        = "Flood bucket"
    Environment = "Dev"
  }

  website {
    index_document = "index.html"
  }
}


output "flood-url" {
  value = aws_s3_bucket.flood_bucket.website_endpoint
}

# Use an official Python runtime as a parent image
FROM python:3.8-alpine

# Set the working directory
WORKDIR /app

# Copy requirements file and install dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the code
COPY . .

# Expose port 8000
EXPOSE 8000

# Run the FastAPI app
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

# # Use an official Python runtime as a parent image
# FROM python:3.8-alpine

# # Set the working directory
# WORKDIR /app

# # Copy requirements file and install dependencies
# COPY requirements.txt ./
# RUN pip install --no-cache-dir -r requirements.txt

# # Copy the rest of the code
# COPY . .

# # Expose port 8000
# EXPOSE 8000

# # Run the FastAPI app
# CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
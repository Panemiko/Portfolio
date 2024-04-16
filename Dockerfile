# Use the official Node.js 18 image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json .
COPY pnpm-lock.yaml .

# Install PNPM globally
RUN npm install -g pnpm

# Install app dependencies using PNPM
RUN pnpm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js app
RUN pnpm run build

# Expose the port Next.js runs on
EXPOSE 3000

# Start the Next.js app
CMD ["pnpm", "start"]

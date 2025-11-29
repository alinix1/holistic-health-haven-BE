## **Deploying a Full-Stack App on AWS EC2 Instance**

- Set up an AWS EC2 instance
- Install PostgreSQL
- Deploy your application code onto the instance

### Setup:

- An AWS account ✅
- Git Bash ✅
- PostgreSQL ✅

### Step 1: Launch an EC2 instance ✅

- Ubuntu operating system is a popular choice when setting up an AWS EC2 instance as it is open-source
  - Log into **AWS console** and search for EC2 using search bar
  - Click on “**Launch instance**” to begin set up and launch your AWS EC2 instance
  - Provide a unique and descriptive name for your instance
  - Next, in the **Application and OS Images** section, select **Ubuntu**
  - **Instance type** → select the default option (preselected)
    - Architecture: 64-bit (x86)
    - t2.micro (default)
  - In the Key pair section, click “**Create new key pair**” to generate a new key pair (this key pair will be used to securely connect to your AWS EC2 Ubuntu instance using SSH)
  - Next, prompted to set up your Key pair → enter a Key pair name, keep the default options, and click “**Create key pair**” (downloaded automatically)
  - In **Network Settings** section, leave the first option as default, beside the SSH checkbox, click the dropdown menu and select the location from which you want to connect your instance
    - **0.0.0.0/0** option allows you to connect to your instance from any machine
    - **Custom** option provides greater control over who and where your instance can accept connections
    - **My IP** option allows you to only connect to your instance from your local machine
      - Select “**My IP**” for now
  - Finally, allow **HTTP** and **HTTPS** options to ensure your instance is accessible via the web
  - Keep the default options for the **Configure storage** and **Advanced details** sections, as they provide the best performance for your EC2 instance
  - Click “**Launch instance**” button to launch your instance
  - Next, you will establish a secure **SSH** connection to your instance

### Step 2: Connect to your AWS EC2 Ubuntu Instance ✅

- _EC2 instance = a remote Linux server in AWS_
- Establish a connection to AWS EC2 Ubuntu instance using SSH → SSH ensures secure and encrypted access to your instance
- In order to authenticate the connection, you will use the key pair you created earlier to verify your identity and access the instance
- Navigate to your EC2 dashboard and click on “**Connect to instance**” to navigate to the **Instances** page
- Select the **SSH client** tab to review your connection details
  - Copy the command example:
    `ssh -i "california-sam-mbp.pem" ubuntu@ec2-54-177-247-0.us-west-1.compute.amazonaws.com`
- To connect to your instance, open **Git Bash** (Terminal), navigate to the directory where your **Key pair was downloaded**, then run the command:
  - `mv california-sam-mbp.pem ~/.ssh` to **move to the ssh folder in root directory**
- Then execute the following command:
  - `chmod 400 "your-key-pair-name" ssh -i "your-key-pair-name" ubuntu@ec2-*-*-*`
- Now running on virtual machine and not your local machine
- After executing the command, you will get a prompt → type “**yes**” and hit `ENTER` to proceed
- You have now successfully connected to your AWS EC2 Ubuntu instance 🎉

### Step 3: Update and Upgrade your instance ✅

- Now you will update and upgrade your instance to ensure it is up-to-date with the latest versions (including recent updates/upgrades to security patches)
- Run the following commands:
  - `sudo apt update` `sudo apt upgrade`
- After executing the command, you will get the prompt → type “**Y**” and hit `ENTER` to proceed
  - Use the `SPACEBAR` to mark each unchecked box and once all checkboxes are marked, press `ENTER` to complete the process
- Instance is now ready for use in Ubuntu; navigate to Terminal to connect to PostgreSQL database

### Step 4: Run Code on EC2 instance ✅

- SSH into EC2
- Check that node is installed on EC2 instance by running the command in Terminal:
  - `node --version`
- If not installed, install it on EC2:
  - _Download and run the NodeSource setup script for Node.js 20.x_
  - _Install Node.js (this also installs npm)_
  ```
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt-get install -y nodejs
  ```
- Verify installation success
- Exit SSH
- Get source code from backend onto server by running rsync from local machine:
  - `rsync -avz --exclude 'node_modules' --exclude '.git' --exclude '.env' \
-e "ssh -i ~/.ssh/your-key.pem" \
. ubuntu@ip-address:~/app`
  - What **rsync** does: it copies your source code files to the EC2 instance
  - Exclude certain folders/files from the EC2 instance
    - Replace `ip-address` with actual IP
    - Replace `your-key.pem` with actual key name
  - Send everything in current directory to remote EC2 instance
  - Put everything into a folder on that instance called /app
- SSH back into EC2 instance and run the following commands:
- `npm install` on Linux machine (remote EC2 instance)
- `sudo npm install -g pm2`
- `npm start` Server running on port 3000 (running on EC2 instance) OR `pm2 start npm --name "backend" -- start`
- `pm2 startup` and `pm2 save` for survival of rebooting
  - Can also install systemd (keeps your Node.js app running as a background service on port 3000)
- Port **3000** needs to be open in EC2 **security** group:
  - Go to AWS Console
  - EC2 instance → Security Groups
  - Select your instance’s security group
  - Click “Edit inbound rules”
  - Add rule: Custom TCP, Port 3000, Source: 0.0.0.0/0 (or My IP for testing)
  - Save rules
- Setting up environment variables `.env` on EC2 instance:
  - While SSH’d into EC2: `cd ~/app`
  - Create `.env` file: `nano .env`
  - Add your environment variables:

```jsx
DATABASE_URL=postgresql://username:password@localhost:5432/dbname
      PORT=3000
      NODE_ENV=production
```

- - Save and exit: `CTRL+X`, then `Y`, then `ENTER`
- Test the application works:
  - Visit `http://your-ec2-public-ip:3000` in browser

### Step 5: Setting up a PostgreSQL Database on EC2 instance ✅

- Install PostgreSQL on EC2 instance (if not already installed)

```bash
sudo apt update
sudo apt install postgresql postgresql-contrib -y
```

- Start postgreSQL on EC2 instance in Terminal

```bash
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

- Export database on local machine and run following command in Terminal

```bash
# Find your local database username (usually your computer username or 'postgres')
# Replace 'your_local_username' and 'my_app' with your actual values

pg_dump -U your_local_username my_app > my_app_dump.sql

# Verify the file was created
ls -lh my_app_dump.sql
```

- Transfer db dump to EC2 instance

```bash
# Replace paths with your actual key file path and EC2 IP
scp -i /path/to/your-key.pem my_app_dump.sql ubuntu@YOUR_EC2_PUBLIC_IP:/home/ubuntu/
```

- SSH into EC2 instance, then

`sudo -i -u postgres psql`

- Set up database on the EC2 instance:
  - Connect to PostgreSQL
  - Create your database
  - Grant permissions
- Inside PostgreSQL, create your database and user

```sql
CREATE DATABASE my_app;
CREATE ROLE my_app_role WITH LOGIN PASSWORD 'some_password';
GRANT ALL PRIVILEGES ON DATABASE "my_app" TO my_app_role;
\q
```

- Import local database (structure and data included)

```bash
sudo -u postgres psql my_app < /home/ubuntu/my_app_dump.sql
```

- Set environment variable on EC2 instance

```jsx
export DB_URL='postgresql://my_app_role:some_password@127.0.0.1/my_app'
```

- Verify database tables were created

```bash
sudo -u postgres psql -d my_app

# Inside PostgreSQL
\dt -- List all tables

# Check if data exists
SELECT COUNT(*) FROM your_table_name;

\q -- Exit
```

- Start your Node.js server

`npm start` or

`pm2 start npm --name "my-app" -- start`

- Verify the app is running in browser

```bash
# Test locally on EC2
curl http://localhost:3000

# Then in your browser, visit
http://YOUR_EC2_PUBLIC_IP:3000
```

- Security - delete the dump file from EC2 instance

```bash
rm /home/ubuntu/my_app_dump.sql
```

### Step 6: Setting up Nginx as reverse proxy ✅

- Set up Nginx as reverse proxy (so you can use port 80/443 instead of 3000)
- Install and enable Nginx:

```jsx
cd ~
sudo apt install nginx -y
sudo systemctl enable nginx
sudo systemctl start nginx
```

- Navigate to the sites-available folder

```jsx
cd / etc / nginx / sites - available;
```

- Create your server block

```jsx
sudo cp default health_app
```

- Edit the server block:

```jsx
sudo nano health_app
```

- Open the health_app server block for configuration:

```jsx
server {
    listen 80;
    listen [::]:80;

    server_name your-ec2-public-ipv4-address;  # Replace with your actual IP

    # Proxy all requests to your Node.js app on port 3000
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}

```

- Save and exit:
- `CTRL + X`
- `Y`
- `ENTER`
- Test Nginx config

```jsx
sudo nginx -t
```

- Enable the new server block:

```jsx
sudo ln -s /etc/nginx/sites-available/health_app /etc/nginx/sites-enabled/
sudo systemctl restart nginx
```

- Remove the default Nginx page:

```jsx
sudo rm /etc/nginx/sites-enabled/default
sudo systemctl restart nginx
```

- Test it works by visiting:

```jsx
http://your-ec2-public-ip
```

- Update Vercel frontend:

  - Change API URL from `http://your-ec2-ip:3000` to `http://your-ec2-ip`

- Before each session (Day 2-4)

```jsx
# Reconnect to your EC2 instance
ssh -i ~/.ssh/your-key.pem ubuntu@your-ec2-ip

# Quick health check
pm2 status  # (after Day 2)
sudo systemctl status postgresql  # (after Day 3)
```

```jsx
# Exit cleanly
exit
```

### Step 7: Setting up SSL with Let’s Encrypt ✅

After configuring Nginx, secure your backend with a free SSL certificate from Let's Encrypt.

- Install Certbot

On Ubuntu, Certbot is available through snap:

```bash
sudo snap install --classic certbot
```

- Enable Certbot

Create a symbolic link to make certbot accessible:

```bash
sudo ln -s /snap/bin/certbot /usr/bin/certbot
```

- Obtain SSL Certificate

Run Certbot with the Nginx plugin to automatically obtain and configure SSL:

```bash
sudo certbot --nginx -d holistichealthhaven.xyz -d www.holistichealthhaven.xyz
```

You'll be prompted for:

- **Email address:** Enter your email for renewal notifications
- **Terms of Service:** Type `Y` to agree
- **Share email with EFF:** Type `N` (optional)
- **Redirect HTTP to HTTPS:** Choose `2` for automatic redirect (recommended)

- Verify SSL Certificate

Your SSL certificate will be installed at:

- Certificate: `/etc/letsencrypt/live/holistichealthhaven.xyz/fullchain.pem`
- Private Key: `/etc/letsencrypt/live/holistichealthhaven.xyz/privkey.pem`

The certificate is valid for 90 days and will auto-renew.

- Test SSL Configuration

Visit your domain in a browser:

```
https://holistichealthhaven.xyz/api/v1/products
```

### Common Certbot Commands

```bash
# Check certificate status
sudo certbot certificates

# Manually renew certificates
sudo certbot renew

# Test renewal process
sudo certbot renew --dry-run

# Revoke certificate (if needed)
sudo certbot revoke --cert-path /etc/letsencrypt/live/holistichealthhaven.xyz/fullchain.pem
```

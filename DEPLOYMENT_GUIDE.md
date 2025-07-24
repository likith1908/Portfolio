# Deployment Guide for Render.com + MongoDB Atlas

## 🚀 Deploy Your Full-Stack App to Render.com (FREE)

### Prerequisites
- [MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas/register) (Free)
- [Render.com Account](https://render.com) (Free)
- GitHub repository with your code

---

## Step 1: Set Up MongoDB Atlas (Free Tier)

### 1.1 Create MongoDB Atlas Cluster
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) and sign up
2. Create a **New Project** (e.g., "FastAPI Project")
3. Click **"Build a Cluster"** → Select **M0 (FREE)**
4. Choose any cloud provider and region
5. Name your cluster (e.g., "fastapi-cluster") and click **Create**
6. Wait 3-5 minutes for provisioning

### 1.2 Configure Network Access
1. Go to **Network Access** → **Add IP Address**
2. Click **"Allow Access from Anywhere"** (enter `0.0.0.0/0`)
3. Click **Confirm**

⚠️ **Note**: This allows access from any IP. For production, restrict to specific IPs.

### 1.3 Create Database User
1. Go to **Database Access** → **Add New Database User**
2. Choose **Username & Password** authentication
3. Set username: `fastapi_user` (or any name you prefer)
4. Generate a strong password (save it somewhere secure!)
5. Select **Atlas Admin** role
6. Click **Add User**

### 1.4 Get Connection String
1. Go to **Clusters** → Click **Connect**
2. Choose **"Connect your application"**
3. Select **Python** and version **4.2 or later**
4. Copy the connection string. It looks like:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. Replace `<username>` and `<password>` with your actual credentials
6. Add database name at the end: `...mongodb.net/fastapi_db?retryWrites=true&w=majority`

**Example final connection string:**
```
mongodb+srv://fastapi_user:yourpassword123@cluster0.xxxxx.mongodb.net/fastapi_db?retryWrites=true&w=majority
```

---

## Step 2: Deploy to Render.com

### 2.1 Push Code to GitHub
1. Create a new GitHub repository
2. Push your current code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for deployment"
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

### 2.2 Deploy Backend (FastAPI)
1. Go to [Render.com](https://render.com) and sign up
2. Click **"New+"** → **"Web Service"**
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `likith-gannarapu-backend`
   - **Region**: Choose closest to you
   - **Branch**: `main`
   - **Root Directory**: Leave empty
   - **Runtime**: `Python 3`
   - **Build Command**: `cd backend && pip install -r requirements.txt`
   - **Start Command**: `cd backend && uvicorn server:app --host 0.0.0.0 --port $PORT`

5. **Environment Variables** (click "Advanced"):
   - Key: `MONGODB_URI`, Value: Your MongoDB Atlas connection string
   - Key: `DB_NAME`, Value: `fastapi_db`

6. Click **"Create Web Service"**
7. Wait for deployment (5-10 minutes)
8. **Save the backend URL** (e.g., `https://likith-gannarapu-backend.onrender.com`)

### 2.3 Deploy Frontend (React)
1. Click **"New+"** → **"Static Site"**
2. Connect the same GitHub repository
3. Configure:
   - **Name**: `likith-gannarapu-app`
   - **Branch**: `main`
   - **Root Directory**: `frontend`
   - **Build Command**: `yarn install && yarn build`
   - **Publish Directory**: `build`

4. **Environment Variables**:
   - Key: `REACT_APP_BACKEND_URL`, Value: Your backend URL from Step 2.2

5. **Add Rewrite Rule** (for React Router):
   - Source: `/*`
   - Destination: `/index.html`
   - Action: `Rewrite`

6. Click **"Create Static Site"**

---

## Step 3: Test Your Deployment

### 3.1 Test Backend
1. Visit your backend URL: `https://likith-gannarapu-backend.onrender.com/api/`
2. You should see: `{"message": "Hello World"}`

3. Test the status endpoint:
   ```bash
   curl -X POST https://likith-gannarapu-backend.onrender.com/api/status \
   -H "Content-Type: application/json" \
   -d '{"client_name": "test_client"}'
   ```

### 3.2 Test Frontend
1. Visit your frontend URL: `https://likith-gannarapu-app.onrender.com`
2. You should see the Emergent logo and "Building something incredible ~!"
3. Check browser console - it should successfully call the backend API

---

## Step 4: Environment Variables Summary

### Backend Environment Variables (Render.com)
```
MONGODB_URI=mongodb+srv://fastapi_user:yourpassword@cluster0.xxxxx.mongodb.net/fastapi_db?retryWrites=true&w=majority
DB_NAME=fastapi_db
```

### Frontend Environment Variables (Render.com)
```
REACT_APP_BACKEND_URL=https://likith-gannarapu-backend.onrender.com
```

---

## ⚡ Quick Deployment Checklist

- [ ] MongoDB Atlas cluster created (M0 Free)
- [ ] Database user created with password saved
- [ ] Network access configured (0.0.0.0/0)
- [ ] Connection string obtained and tested
- [ ] Code pushed to GitHub
- [ ] Backend deployed on Render.com
- [ ] Frontend deployed on Render.com
- [ ] Environment variables configured
- [ ] Both services tested and working

---

## 🚨 Important Notes

1. **Free Tier Limitations**:
   - Backend sleeps after 15 minutes of inactivity (cold start delay)
   - 750 hours/month limit
   - MongoDB Atlas: 512MB storage limit

2. **Security**: 
   - Never commit `.env` files to Git
   - Use strong passwords for MongoDB
   - For production, restrict MongoDB IP access

3. **Troubleshooting**:
   - Check Render logs if services fail
   - Ensure CORS is enabled in backend
   - Verify environment variables are set correctly

---

## 🎉 Your app is now live and FREE!

- **Frontend**: `https://likith-gannarapu-app.onrender.com`
- **Backend API**: `https://likith-gannarapu-backend.onrender.com/api/`
- **Database**: MongoDB Atlas (Free M0 cluster)

Total monthly cost: **$0** 🎉
# Quick Setup Script for Local Development

# Backend setup
echo "Setting up backend..."
cd backend
pip install -r requirements.txt

# Frontend setup  
echo "Setting up frontend..."
cd ../frontend
yarn install

echo "✅ Setup complete!"
echo ""
echo "To run locally:"
echo "1. Backend: cd backend && uvicorn server:app --reload"
echo "2. Frontend: cd frontend && yarn start"
echo ""
echo "To deploy to Render.com, follow the DEPLOYMENT_GUIDE.md"
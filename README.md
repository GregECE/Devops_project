## Install (development)

### 1) Lancer localement
```bash
cd webapp
npm install
npm start
```
### 2) Les tests
```bash
npm test
```

### 3) Docker
```bash
docker build -t gregece/devops_project:latest .
docker run -p 3000:3000 gregece/devops_project:latest
```
### 4) Vagrant + Ansible
```bash
cd iac
vagrant up
```

### 5) Kubernetes (Minikube)
```bash
minikube start
kubectl apply -f k8s/
kubectl port-forward svc/monapp 3000:80
```

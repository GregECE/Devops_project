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


PROBLEME VAGRANT : 
PS C:\Users\Micha\Devops_project\iac> vagrant up    
Bringing machine 'default' up with 'virtualbox' provider...
==> default: Checking if box 'ubuntu/focal64' version '20240821.0.1' is up to date...
There was an error while executing `VBoxManage`, a CLI used by Vagrant
for controlling VirtualBox. The command and stderr is shown below.

Command: ["showvminfo", "1615f713-d13c-429a-8759-cd95bc1b9ce2", "--machinereadable"]

Stderr: VBoxManage.exe: error: The object functionality is limited
VBoxManage.exe: error: Details: code E_ACCESSDENIED (0x80070005), component MachineWrap, interface IMachine, callee IUnknown
VBoxManage.exe: error: Context: "LockMachine(a->session, LockType_Shared)" at line 3327 of file VBoxManageInfo.cpp

node {
  try {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
      sh 'sudo docker -v'
    }
    stage('build') {
      if(env.BRANCH_NAME == 'test3'){
        sh 'docker build -t react-demo-app-i --no-cache .'
        sh 'docker tag react-demo-app-i localhost:5000/react-demo-app-i'
        sh 'docker push localhost:5000/react-demo-app-i'
        sh 'docker rmi -f react-demo-app-i localhost:5000/react-demo-app-i'
      }
    }
    stage('deploy') {
      sh 'docker pull localhost:5000/react-demo-app-i'
      sh 'docker run -p 3000:80 --name react-demo-app localhost:5000/react-demo-app-i'
    }
  }
  catch (err) {
    throw err
  }
}

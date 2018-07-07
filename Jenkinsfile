node {
  try {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
      sh 'docker -v'
      sh 'printenv'
    }
    stage('Deploy'){
      if(env.BRANCH_NAME == 'master'){
        sh 'docker build -t react-demo-app-i --no-cache .'
        sh 'docker tag react-demo-app-i localhost:5000/react-demo-app-i'
        sh 'docker push localhost:5000/react-demo-app-i'
        sh 'docker rmi -f react-demo-app-i localhost:5000/react-demo-app-i'
      }
    }
  }
  catch (err) {
    throw err
  }
}

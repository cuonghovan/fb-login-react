node {
  try {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
      sh 'docker -v'
    }
    stage('Build') {
      if(env.BRANCH_NAME == 'test3'){
        
        /* Build the image*/
        sh 'docker build -t react-demo-app-i .'
      }
    }
    stage('Publish') {
      when {
        branch 'test3'
      }
      steps {
        /* Push the image with two tags:
         * First, the incremental build number from Jenkins
         * Second, the 'latest' tag.*/
        
        withDockerRegistry([ credentialsId: 'docker-hub-credentials', url: '' ]) {
          sh 'docker push cuonghovan/react-demo-app-i:latest'
          sh 'docker push cuonghovan/react-demo-app-i:${env.BUILD_NUMBER}'
        }
      }
    }
    stage('Deploy') {
      sh 'docker stop react-demo-app'
      sh 'docker rm react-demo-app'
      sh 'docker run -d -p 3000:80 --name react-demo-app cuonghovan/react-demo-app-i'
    }
  }
  catch (err) {
    throw err
  }
}

node {
  def app
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
        app = docker.build('react-demo-app-i')
        
        /* Push the image with two tags:
         * First, the incremental build number from Jenkins
         * Second, the 'latest' tag.*/
        app.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
        /*sh 'docker tag react-demo-app-i cuonghovan/react-demo-app'
        sh 'docker push cuonghovan/react-demo-app'
        sh 'docker rmi -f react-demo-app-i localhost:5000/react-demo-app-i'*/
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

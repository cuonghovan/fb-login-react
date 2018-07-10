node {
  try {
    stage("Checkout") {
      checkout scm
    }
    stage("Environment") {
      echo "Branch: ${env.BRANCH_NAME}"
      sh "git --version"      
      sh "docker -v"
    }
    if(env.BRANCH_NAME == "test3" || env.BRANCH_NAME == "release"){
      stage("Build") {
        /* Build the image */
        sh "docker build -t react-demo-app-i ."
      }
    }
    if(env.BRANCH_NAME == "test3"){
      stage("Deploy") {
        /* Run the image */
        if (docker ps -a | grep react-demo-app) {
          sh "docker stop react-demo-app"
          sh "&& docker rm react-demo-app"
        }
        sh "docker run -d -p 3000:80 --name react-demo-app react-demo-app-i"
      }
    }
    if(env.BRANCH_NAME == "release"){
      stage("Publish") {
        /* Push the image */
        withDockerRegistry([credentialsId: "docker-hub-credentials", url: ""]) {
          sh "docker tag react-demo-app-i cuonghovan/react-demo-app-i:${env.BUILD_NUMBER}"
          sh "docker tag react-demo-app-i cuonghovan/react-demo-app-i:latest"
          sh "docker push cuonghovan/react-demo-app-i:${env.BUILD_NUMBER}"
          sh "docker push cuonghovan/react-demo-app-i:latest"
        }
      }
    }
  }
  catch (err) {
    throw err
  }
}

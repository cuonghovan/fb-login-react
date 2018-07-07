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
    stage("Test") {
      echo "Test passed."
    }
    stage("Build") {
      if(env.BRANCH_NAME == "test3" || env.BRANCH_NAME == "develop"){
        /* Build the image*/
        sh "docker build -t react-demo-app-i ."
      }
    }
    stage("Publish") {
      if(env.BRANCH_NAME == "test3"){
        /* Push the image*/
        withDockerRegistry([credentialsId: "docker-hub-credentials", url: ""]) {
          sh "docker tag react-demo-app-i cuonghovan/react-demo-app-i:${env.BUILD_NUMBER}"
          sh "docker tag react-demo-app-i cuonghovan/react-demo-app-i:lastest"
          sh "docker push cuonghovan/react-demo-app-i:${env.BUILD_NUMBER}"
          sh "docker push cuonghovan/react-demo-app-i:lastest"
        }
      }
    }
    stage("Deploy") {
      if(env.BRANCH_NAME == "develop"){
        sh "docker stop react-demo-app"
        sh "docker rm react-demo-app"
        sh "docker run -d -p 3000:80 --name react-demo-app react-demo-app-i"
      }
    }
  }
  catch (err) {
    throw err
  }
}

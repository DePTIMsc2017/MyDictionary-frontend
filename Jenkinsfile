#!groovy

node {
   def mvnHome
   stage('Checkout') {
      checkout scm
   }
   stage('Build') {
        sh 'npm install'
        sh 'npm run build'
        sh 'ls -l'
        archiveArtifacts artifacts: '**/dist/*', fingerprint: true
   }
   stage('Deploy') {
        sh 'cp -R $JENKINS_HOME/jobs/$JOB_BASE_NAME/builds/$BUILD_ID/archive/dist/* /var/mydictionary-ci/mydictionary-frontend/'
   }
}

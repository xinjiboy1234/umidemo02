openssl genrsa -out my/ca.key 2048

openssl req -new -x509 -days 7304 -key my/ca.key -out my/ca.crt -subj "/C=CN/ST=shandong/L=jinan/O=My SSL G1/OU=IT Dept/CN=My SSL G1 Server"

##生成SSL证书私钥：
openssl genrsa -out my/server_domain.pem 2048
##制作SSL证书私钥
openssl rsa -in my/server_domain.pem -out my/server_domain.key
##生成SSL证书请求
openssl req -new -key my/server_domain.pem -out my/server_domain.csr -subj "/C=CN/ST=shandong/L=jinan/O=localhost test/OU=IT Dept/CN=localhost"
##根CA进行SSL证书签发
openssl ca -policy policy_anything -days 3652 -cert my/ca.crt -keyfile my/ca.key -in my/server_domain.csr -out my/server_domain.crt -config openssl.cfg

## java 证书
openssl pkcs12 -export -clcerts -name cas-server -inkey my/server_domain.pem -in my/server_domain.crt -out my/java/server.p12

## 查看信息
keytool -list -keystore my/java/server.p12 -storetype pkcs12 -v



=======================================================================================================================================================

openssl genrsa -des3 -out my2/mycert.key 2048

openssl req -new -key my2/mycert.key -out my2/mycert.csr

# openssl x509 -req -days 365 -in my2/mycert.csr -signkey my2/mycert_no_passwd.key -out my2/mycert.crt

openssl rsa -in my2/mycert.key -out my2/mycert_no_passwd.key

openssl x509 -req -days 365 -in my2/mycert.csr -signkey my2/mycert_no_passwd.key -out my2/mycert.crt




##java
keytool -import -alias localhost -file server_domain.crt -keystore thekeystore

var privateKey = 'MIICXgIBAAKBgQDTQur1OPPjM5+xHXM0//caRPoNT46J+HLR+LdtvkgP+3294KMjzYHrwyiCxSEmszq6erNZvPglx8uW0MVDAMi7OO7DNQISAmbwHPskTzDeVtOJY5FFFP2wHnQYXblAzOuEXJTmBHrfCKG9Evt+Xzpdio4PUssxDWx2JSdOalgCfQIDAQABAoGBAMDaC4aD0Q+M5rBWQ/8T0szmPqW8BFCqvpYyx6+kzj/YwnZ9BDAAwCMqambF8XdUkb39mI/I03YZpx4rwodhxdqKVbSDc5mmkCFUnUJiLVN7CTs1QffxvzduAs5s8n46ES3ktnv0CrIeWeP4IX9zdBWmTTkqYEDrG2xREYy+U5CBAkEA8BxbLH7v6al8daSHsAgyHy7ttNr91OPWJiIolJm///qul7JpJ8jz2qrwz76UXle6Yda3eBIa0lWmqMNgJaf4DQJBAOE91U6uFyQ53LF3+cv2SKZ30FAhf45B8y1UCBMhSWjoNWX5I2j4CPC4zSB+fzpWkeVGMrjnVo5+0fc1frjNqDECQQC5T+k+Cin3WItp8DWYsnqcfoePEYTeDYl1nN9c8NyyHzMoeNWXkwxBM7TvYNL5jROX9zNaQ/7XXqtljIRkC6LxAkEAwlLTXe8qPfHBqkak90fCxAPob8mGv9e8EiZGVSLJr71unEyGNUCQjgYRyu/3mgAoHNMkXYwQjB1zzkCT1KJxcQJADQWLUKfgx9h0J6eCsuUBhjwlawKxyEZN8YUzq5ZWn7Ys27R1dkew7ZWs9ZZlRz0Yyw5jw3nVX4hGhk68znltSA==';
var publicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDTQur1OPPjM5+xHXM0//caRPoNT46J+HLR+LdtvkgP+3294KMjzYHrwyiCxSEmszq6erNZvPglx8uW0MVDAMi7OO7DNQISAmbwHPskTzDeVtOJY5FFFP2wHnQYXblAzOuEXJTmBHrfCKG9Evt+Xzpdio4PUssxDWx2JSdOalgCfQIDAQAB';

// Create the encryption object and set the key.
var crypt = new JSEncrypt();
// crypt.setKey(__YOUR_OPENSSL_PRIVATE_OR_PUBLIC_KEY__); //You can use also setPrivateKey and setPublicKey, they are both alias to setKey
// crypt.setPrivateKey(privateKey);
crypt.setPublicKey(publicKey);

//Eventhough the methods are called setPublicKey and setPrivateKey, remember
//that they are only alias to setKey, so you can pass them both a private or
//a public openssl key, just remember that setting a public key allows you to only encrypt.

var text = 'test';
// Encrypt the data with the public key.
var enc = crypt.encrypt(text);

crypt.setPrivateKey(privateKey);
// Now decrypt the crypted text with the private key.
var dec = crypt.decrypt(enc);

// Now a simple check to see if the round-trip worked.
if (dec === text){
    alert('It works!!!');
} else {
    alert('Something went wrong....');
}
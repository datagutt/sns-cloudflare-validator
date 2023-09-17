const cerificatePem = `-----BEGIN CERTIFICATE-----
MIICATCCAWoCCQDq6llX1O2amTANBgkqhkiG9w0BAQsFADBFMQswCQYDVQQGEwJV
UzERMA8GA1UECAwISWxsaW5vaXMxEDAOBgNVBAcMB0NoaWNhZ28xETAPBgNVBAoM
CEx1Y3lzb2Z0MB4XDTIzMDkxNjA0NTI1MFoXDTIzMTAxNjA0NTI1MFowRTELMAkG
A1UEBhMCVVMxETAPBgNVBAgMCElsbGlub2lzMRAwDgYDVQQHDAdDaGljYWdvMREw
DwYDVQQKDAhMdWN5c29mdDCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEAzbJg
YV0A9M6kp1JTaMdt6N5nDhA10ibEGdKfJgfwN+KExqQ5GAp8dyFmIQ5cGcgpJZZL
M3uV9Ash9xmhKWRHGhszSienEBVSeMU/1OBPjSONj9Q6T2qOSE/LIsYu5lWQKaCO
pR8n3wJCEyxsCS4F3Sr1ikNn7fL3ABATX6QDRJMCAwEAATANBgkqhkiG9w0BAQsF
AAOBgQCqA+y+2K1PUVlnvHCvkkA9T8uodtBRsdxaCBrqy5+36NiqxIIrf1aV2/js
aGyHbuqLG68AyBdISkPpHwJ2AT2cO+8eqFL5iYDuRoSrb0MI/lY68f55REm4J+Cp
YMtbAXtsfZ84QCasImZZSDSCdPn3eFcQCpcFnAuncgLxxnNN4w==
-----END CERTIFICATE-----`;

// deepcode ignore HardcodedNonCryptoSecret/test: Mock private key
const privateKeyPem = `-----BEGIN RSA PRIVATE KEY-----
MIICWwIBAAKBgQDNsmBhXQD0zqSnUlNox23o3mcOEDXSJsQZ0p8mB/A34oTGpDkY
Cnx3IWYhDlwZyCkllksze5X0CyH3GaEpZEcaGzNKJ6cQFVJ4xT/U4E+NI42P1DpP
ao5IT8sixi7mVZApoI6lHyffAkITLGwJLgXdKvWKQ2ft8vcAEBNfpANEkwIDAQAB
AoGALYNrif+PJ5vVmORBamy+KAmV2enCTuae+2u8JSkagPMRF/bcXzJqyd1NAMFx
pY7Bc/ymVRTiYCZadJdqLoNuq7VAi58EfDDH0Ynxgx7asYriVZ+vmjHW67On5yif
5Ru+tlYLlqcgs5JwKZUuH4ogxHkqT9dqcLR8MNgueXjUpukCQQD35r2balO+0Cp3
qr3brDIySx9jrPMIw4V9SzkQvx2ZochmZ7SLvdKczAj54yilNjmHuA5KAdKslYct
n6M9zarPAkEA1GqrPPOS88462kQOoELRAHq6jPQS3PYuIWb0GPyCLXeILRJlWBc4
q4REv+CfR+1pK0ACOD3xEM2Gt/0bg2yq/QJAQVdGPsKl1DOWHfiZFl+q02rNmT4q
yPKQKtg68FkPekEUSzmmcvbTnpSBASyIuBM00rsGuScF2ouHF9Vt94pQLQJAOwji
SnBPeR7p0Ft1zSiEuaNiUWZMD8kDjRj14jPbYhOEbzJbpB3gDBsYmFMvMWhUAEcr
1sGwS8EzHdNkYCRFaQJAHxjIRa5IYvyCEb8cl/7x/f7l+OOL5K4sApk8xpcFAVD3
ampv1ArFa2oHE32g4Wxiq39m6o5zjJUtzaJEtzduQA==
-----END RSA PRIVATE KEY-----`;

export { cerificatePem, privateKeyPem };

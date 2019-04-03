const webpush = require('web-push');

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const vapidKeys = {
    publicKey:
        'BAoPzBxqMNB1MrUgyKcF_k2MlhpfgcdWcAmwPpEunTnNzDfiOBkJU8F_iTJDkSGp4oG91QNxre-owYgq3GMGD2k',
    privateKey: 'IWo_ZxC9wersxixWjPMTf2UP5YkiRVXyP4Rnc_oNPz8'
};

webpush.setVapidDetails(
    'mailto:swimkim@icon.foundation',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

const subscription = {  
    "endpoint":"https://fcm.googleapis.com/fcm/send/d_1mjMpuZTw:APA91bHBANDpnf2JM0-Lv2m6PO_TZkJ6tZYpJiOw4xcy08Yef1a84JX3-rK_KpsvCEa1yyo7sX6wN1Bo8kGVKFb35aQV1Nd8fEU9oV-ZvKcWZSPhek2QXqGzfYb42pbjVFPDaqpDjEBk",
    "expirationTime":null,
    "keys":{  
       "p256dh":"BLaySvz7E_kLPQB20hXQPrezk0JROfTyiu2gbOeVqIhVyWI9_h262cu26nDQdj4K5G-5-6zrxC2vvJX5ixHbK0A",
       "auth":"HG-98mRCGgT4scSESk0HVg"
    }
 }

webpush.sendNotification(subscription, 'Test Push!')

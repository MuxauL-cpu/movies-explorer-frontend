const movies = [
  {
    movieId: 1,
    nameRU: '33 слова о дизайне',
    duration: '1ч 42м',
    thumbNail: 'https://s3-alpha-sig.figma.com/img/71a2/3794/3bfd6b9af4141d2ee15e36a186b073a7?Expires=1688342400&Signature=iChOjFA3RFgWGl3Fx4k02EVEagTTiORRfs9fGTPMFPXhFD~14kul35w8EgTtqiXVko9ZXYsPcG~iyr62Q6kBtWKYYGmwXtrH09B1Ba0jYzfjzwTyoHSJyI2M81HF6~rGjhPSpHSzsdywmAIkVJOn3fTyX9kTJqBUzri7celLNpa2Df0OmqMf051pq91E14j5VGx4nZHid~iQvGL563gkUxrvbhVueJwLxt7ACA8GMko-dfM6LTAEvUNpuWIdOnNnJ-J-wsQkC2~tc2p0SNffBU4zoviax4XG190FNflHZsZ6xNVJsRDI9FSiXWYEbOZoIJzw3DHmGLrGwRtFi5bleg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    isLiked: true
  },
  {
    movieId: 2,
    nameRU: 'Киноальманах «100 лет дизайна»',
    duration: '1ч 42м',
    thumbNail: 'https://s3-alpha-sig.figma.com/img/90ba/2e4b/e072f3f38937c7f5d592d64f3fa59f33?Expires=1688342400&Signature=lRq3cwwrE4J1m0oXWCw8vvTsOeZIdleW9VCltBZH3a82I7XKfLqOBzlR5jXdFfZ7v-DB7nxc5BTUDZvO6mWB7dyKwfUE39iVFFHAPllU-Fm1YIaSx1WnYbj9wc4uTmObaF-OheCHVMuC2BopZ7XyHJTgixWXjrnOq0CZ~1Gg2cUKS5WLgRhm~FoVTbdw7KgudgPTyG50qKUcQgps9m8yMXxYwIKcoyEzF6mkV7ExabmSrtzPn-mimzRMHeyz49q0UGXGZifwfm8Ryf3-5eiN4nPeuphBgrbrVc29Tp17MC7Abwe2xkIeaax8bu40YlvInP0r9dKgh-3mfGxJrkPWfQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    isLiked: true
  },
  {
    movieId: 3,
    nameRU: 'В погоне за Бенкси',
    duration: '1ч 42м',
    thumbNail: 'https://s3-alpha-sig.figma.com/img/7501/fcae/58fcf299e5a04c29cb37e6280c83da16?Expires=1688342400&Signature=gX1SQhcFjsnHUZv-uxpGcMkOhoNwmJFXxKbwGxM2I2shGY2wxXLyRlduJxzVt6Xs6K8zz8cP3mUMTgbDuVQfbOqSRhl0bo5bcmvjzApA0oIvK5DDsG9J7YCixidPlLJg5Kni8~8Zmwax49ZdoJjHrz7WwYTBUoRk-BLfNFLcYDiWtJYPC8hcuNt7Et~ELmDp~R2c7SGT7ch-3Hk-2q21dseAItsfrW5usFFjQic-Mfgo-XRUVzccfhIZaED3pB1ic764JSAq38Xi9RT8zHN-aytxgt6ZfQ6DVkuNQn3jbUIOpQSf5DhrTFQbk4nMhJmXw8wR-sM31EAqQ3EH95ZUVg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    isLiked: true
  },
  {
    movieId: 4,
    nameRU: 'Баския: Взрыв реальности',
    duration: '1ч 42м',
    thumbNail: 'https://s3-alpha-sig.figma.com/img/96cc/9d30/2e6653f8a2dbac83b4795cc1e846a243?Expires=1688342400&Signature=U8BybciW0q0qSyBGuh~RRgffn7pXBEHcl4fmAWtg1IxTJz-1J9zVIdJCW-XAxV07JPvMrf641vONOViAaV40Z9jhKSpUOQtmuGP1x5VG~Glu7lwOEVNH~3Ji01lUWVhtCaOuMrFbdMvcgG1m0j9raatdw0YZAf3pV8FVKctC8fzZ2erk972mkT3S4umHmwE3sHYsLNhluVWMSfijoB2otwQ23uJO97LuXzGsbhgM-e37gWbhOWhkQRuTQje7swezYVsRoRZPJBKqQDXagl5Hx8wyAQTLaKhKSPXtOtsPY4ZK0rBYRYTiSZdTELCFtUHVnqXduTuQAM~2ox~F40CkKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    isLiked: true
  },
  {
    movieId: 5,
    nameRU: 'Бег это свобода',
    duration: '1ч 42м',
    thumbNail: 'https://s3-alpha-sig.figma.com/img/b5e4/a6cb/ff07e856bc14f2c67fd3d453609875e8?Expires=1688342400&Signature=URPnAq1QjpnAeu6cIoCDTVqTyZ-dMtavfonmNajuj3FjMvTkJedO5Lr6goxDlqkz1AYX54ZMioB8uyY2VU7LXEDvqpwnQAdLkM7jHjJqggiSMALCAqKnzhhTWM8jCngLA0Rbl0fCClOLlIDDJHApTD5q319DdTuQmwkTvl3Rb0m5KuYDRb6xhc6bteTi0-RvO2iichx5JZV5wn7gcpeQL8rUm5xcsW8pRYTq4FMMCX2TBMmq9hnIearg63s54oH6QVksmWJ1MFsUTroC4grdMuR4B-tO2z3tSN~WAzXjnHcUH6H8jUqdDkUrVUCsy9-2eeajhzRfP1r05RUboFkOug__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    isLiked: false
  },
  {
    movieId: 6,
    nameRU: 'Книготворцы',
    duration: '1ч 42м',
    thumbNail: 'https://s3-alpha-sig.figma.com/img/199d/35fd/ed1213c8b6d45652874df917fdcefb3b?Expires=1688342400&Signature=KuTPIR1~VvowE2fDT-V1lmrjklBzrykOZusQW-fAmsNgCmnRGFEFQ2ASqM11rmVT1UMRpK6r1dVTefsMVoZLD7ivyMnAqWRm-YchWQFkUo9TD~q5je8-1jD0b3raWfAe9bwI9U~qksRQ5uTwb55fgimZeO4pcuDP6BqV6rjS1PrYWLW3hlpI9E-FJ-iwBqgYAHGP1WQ~a7w5v~7YlpT3eSYHMk4L4aB4DyZjR3ihZXtZ5kwwasGxauZVBgtmZkLJOj6SbMFsXJuTCqp02LaIJRa~SoJiai2g2XMXoHhDONnH2Bm790wYj-aajc4GJxF5O~25hMxPpn3ZeqVz6Y42bQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    isLiked: true
  },
  {
    movieId: 7,
    nameRU: 'Когда я думаю о Германии ночью',
    duration: '1ч 42м',
    thumbNail: 'https://s3-alpha-sig.figma.com/img/16ca/4833/dee0e587ee02e0b9181fbac58ce0aeee?Expires=1688342400&Signature=adeSPeAosDQNVg7M0CFpQB2--YylVFzlITzDw759WlZ1cwWugqDMGK22am-SdVpogF~-I5sgpKlvJT~stL3v1gzGIT67dzLUwWlecyv-NriJIyOLDyAklBKYsPZynueUEjYjWpF2cBnrgFPyj9Dw39ZEnD6OH8ctfnTtDHgkPA2ADauWuFLF8~ZGkYLhn6oEPizNJ-IV3Qi9FujI9uUuxZZgcHRLhtLTisIDj5PNmcMFvqAYWnyKyMPAHwxmgwGd4lFTraPqRbQu3S~OnhDyj3GpZqrnPinzEBj-h0zSvZ-1YzUcGkTYTKPOkm-OVjN2fadyamBUNNWPywEmPZUjUg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    isLiked: false
  },
  {
    movieId: 8,
    nameRU: 'Gimme Danger: История Игги и The Stooges',
    duration: '1ч 42м',
    thumbNail: 'https://s3-alpha-sig.figma.com/img/db51/87fa/f8c41998d6d82176e93f868814bf1d2b?Expires=1688342400&Signature=lbaKJWPW0rbTlxJKxcE52vsVcpB7JMP67oI0uKv-30FUnMM4uT4070z~9-oYEUsNokKvJ1HwVAGU1pK1lpWhQ-Q99d2fYcb0FdZKACubEP6esbB4oPIwm6BSQrnxtMi3WYow9ncsJi1Q-8sCpMwtErIGx6CVGZz3PSfk9hEB-oywxzsAxqhvYVKZrO0lW8bhbzkDLSoCpdBHno3Dui3wRbrXcRbwLguWwZ8g6VK0u6tqj8-cBn333JhIqPjTOPux8IJFhrILOLaqM3~LR~M5bmiWILexMpXBX-jQoUxXZtHibOIBSRe0SIYd29ebehBK-hQK~tY7n62jaKfPQ65yDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    isLiked: false
  },
  {
    movieId: 9,
    nameRU: 'Дженис: Маленькая девочка грустит',
    duration: '1ч 42м',
    thumbNail: 'https://s3-alpha-sig.figma.com/img/8604/c3a8/492a130e904f2edf96264863e930e51f?Expires=1688342400&Signature=AlLZo9rXDLdCRk2zPhoHGHL0B901KpAWYyN1BaTNC3s3prYekVYigDwnjFnrRyoqAC8oOb3olodlr~f9pF8ffV1jmYHTfQtzJoXOjr16eYpqtucNgmQ0aBWe5tpqz9kvaKdltHr6wum6FNa6gqnslvEf6Fq0MfNjod2mEKTir-KG5UVxd7yfQ8bQQeUWThtKwI-zFod5aOBv9RDmCQiKxqsbLU-eFbcMvw~JoyD4a05oOPzd0KUmfyzeYBrt8mPvaVEkODmbhsBHzdWhPkO~V9ocNwz0dGgXVYYWsi8rJav4bC40ieloUY85usIPR8kX8P5z7XTVAPltLsTHO2cXew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    isLiked: false
  },
  {
    movieId: 10,
    nameRU: 'Соберись перед прыжком',
    duration: '1ч 42м',
    thumbNail: 'https://s3-alpha-sig.figma.com/img/532b/0b33/a7e2023e9428929e8632172735ff18f5?Expires=1688342400&Signature=pLo2w~IXtQaZl3TmdMFbCwCR4LFMZXaLmbMgbxLul92~~Lknpaa5JPO8PqqmPw~Wy1QEQkIFepEG2g91pKVXmRG18ffizuRyY9rmBpioIiUgeYBg1JTZfYyJmQEvuNrk~ZzMY2z67KDtV-FV-m2yfCGPzH81NIdNfFr2ELJyDWC2pIJcswMCgOonTQKat5-VBAkYUpCrpf9jmgzUZmFgYjenc-oUsMgNRWigI~L0JLHlGF3vjf2aABj1t29Mj383MEgPD-3HPiqyNYqmsXQwYAq3eKvB34CvB55VGkmW2ro0XFjBGBX0XJ1kh3dvhUWyElMRuVyrP605fw9b-2VtyA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    isLiked: false
  },
  {
    movieId: 11,
    nameRU: 'Пи Джей Харви: A dog called money',
    duration: '1ч 42м',
    thumbNail: 'https://s3-alpha-sig.figma.com/img/ff18/63df/9c469b036f5505dd9a947241f21f8245?Expires=1688342400&Signature=N7yfIE0QKXSMrdok3n6ujBl~N9tO7YRtc~gBGuFBeB-MbHBfUpFfIxGHvr0U0lMLUCCQIcttPZTE8lJeFHBy3DKrduGjoP~6zWPIVjkzzoiID-b-k6EWcFcA1wnRF302iezRMfPMbso2UMV1qAWW0Rgx-D5fnKOJPIvymQW5UfuiAEFX-u~RKhN5AmoXc-oIMiUz9R-AYwTyfAeefc7fpEQdeSiFC0yjq7R9Hzk9afPP4FO74L0EhpLlt4E108TZC3Xfv8r99WLQZz7U7uCBsQVj-y4ls1fZRdn9mJr6jPlEv2LTUL6HlwgU4rJs3e1mo4rMUlvMhRJEsx9V2vpT8Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    isLiked: false
  },
  {
    movieId: 12,
    nameRU: 'По волнам: Искусство звука в кино',
    duration: '1ч 42м',
    thumbNail: 'https://s3-alpha-sig.figma.com/img/9f37/4383/9cbecda3e33558c8bfcc052f8002c008?Expires=1688342400&Signature=jTx2Du~iPmTzZC9ipVaoxXMoMNriiyZvaPrBEHLlgtbk5HSPxWrxRQujU0JJLfDE4PDufl-lXAIv0Q-cErHqbteZCQASi~5qF6DY7-PkuBYwOMvk3Gt~rJ0v0435UFeNnQkSKPug7Qun~r27NjKfyKOdxSW3IBgq0lt3~s8J7aIWrorjUK~YTSxf6Ez08yuD-yPKLwwTJrlJLJqGJEKhUt6XPVfKtp6jNW4RhG8-wYFzfQdp6lJ8O6iotL7tpt2Vf3xwMnRfS~jvskLgL5jHDiHTxJ-0ltBSQLp3FqRpozgS6IBzcznkm7ukFVTZQJEYY5zkWOOy4xTrNKSqVLGhVg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    isLiked: false
  },
  {
    movieId: 13,
    nameRU: 'Рудбой',
    duration: '1ч 42м',
    thumbNail: 'https://s3-alpha-sig.figma.com/img/15e7/907e/a155d35bb2900a7523c41e586e62a5a7?Expires=1688342400&Signature=ZEgzMubR75EfqtOqL6tXuQPRj85sDbtPknypfnS0xEc4Hw7A~6FhSGwFLb8OVwGCTBT6GauM9Ea4XoBiJL7Suxn2QTQrp~RyKVnQfbMwIAcsXCQoiyv~ZcLCsBtZf-wzM4snDtxJa1AdgsA7YCZDhlpDE8Y8wFJbXqIMytQAW2yQLNzUxkgYFq6BP~ctx73hXEXgSPzbdBPRMokY4bkwsbuvplqWzyy2RQkY8Ff7Tg5FIKE1bSTHnnBYIKYa3SfNKw7ZFalY~ywNKBRkH1PWdZLIGtzzirJel7VNbGXxuxtSUy5FLEoKaFhKJbEKic5HZ5THBcVczrBYiELU4XETDQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    isLiked: false
  },
  {
    movieId: 14,
    nameRU: 'Скейт — кухня',
    duration: '1ч 42м',
    thumbNail: 'https://s3-alpha-sig.figma.com/img/6380/fa53/8ad8f141ae7babcf9a109cb6e6f760e7?Expires=1688342400&Signature=Co1eOcyRmudxBZpp3KtCodcsm43iRI1CSRfWy3W-XvSViua~H6Q7Vh0wyTKAhYCB78kipZvcjuZYhNBPTpkBI5tjvVeUVGe2CHlq02ZN3atjtKgqjYlUycyqZRQZHabDOq5a17OunjPm--T65bhNq36sXK8rOdIJPXjSkl2pPB-mQ-jQhIfn~9slGO8PFqhWDivvmU~SxCtSiBUH0cvJ7oBfCH914y0w6SI9twZkRfW980h3LocrsC0tyrkTosgZS0B17ipX37OxxMdPI1BhVqlD4TDQMGMZsLdefuMV9Ovp4b7~7KYiHJnJ~VkFd2f-MO4z6~3zIwXUfXs-WmdADQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    isLiked: false
  },
  {
    movieId: 15,
    nameRU: 'Война искусств',
    duration: '1ч 42м',
    thumbNail: 'https://s3-alpha-sig.figma.com/img/ab88/283d/4aab68a30ea43a46bde9dae287117202?Expires=1688342400&Signature=KnB2uwTf6dNIaTSBXWRgPYjW-kiw2zDz7oqJOGIq-ltB2zfCLiBYB28ywU7eayQQI7AImvLrF0icAV5tM14Ant-58ETlTu7QKQ0UTqDiuH9NhQE2jTAj-BRccKlabera~9mR9OWEkfeK0hnml3-DnU5te-ZdEJ5~UN-8FNVX~zKgRjwUzxC3UerLPAHkaMgDJjm9lUQ1yzbiv7lG3reE2dyJ513bzjfXLSMCZlYlcgl3rJQP2nAPsM~C2gtffDzCfcKUkSP1z5JdMwBbrDXCpBhlmRrMJiOkEKnYhWGvOAI49AlFEx3RWFsSomRswtdqN49-sjp088Uw8vQCUj88~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    isLiked: false
  },
  {
    movieId: 16,
    nameRU: 'Зона',
    duration: '1ч 42м',
    thumbNail: 'https://s3-alpha-sig.figma.com/img/55cf/5d6f/979762a87e125d70efcb27da8d89c745?Expires=1688342400&Signature=gka7cpPvjqdEBp-26DYC-v1NJaDKWfu83K9Q5b9ijjiwLLBW-FVcUKW88qiJl~JLVZnVqkcLiwTQ5nwIUNZjZu5idQd4eIhLtEibdk~Wg616WwK8Av4ickyPK26KrXUzFFcqqKCwfyc2fBzHNx9~B4~6nfylX9mNI4umzfofuid4bWxIiY3pNhwMP6~1Japabct5bV-ydkbHGfQqt6XSrOW0R7HGi4cltmWTwIhbUnMgyzlpcwr8uPKnHR9SPX2TsxsVH0kfUyxWebuVIHX8k2bD~N6DXEMLyQKFHCtG4F4Turc~L6MPkSafZagZyrxps76AIMXqTUYjujUo4q91YA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    isLiked: false
  },
];

export default movies;
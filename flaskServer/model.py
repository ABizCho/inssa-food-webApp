import tensorflow as tf
from keras.applications.vgg19 import VGG19
from keras.preprocessing import image
from keras.applications.vgg19 import preprocess_input
from keras.models import Model
import keras
import matplotlib.pyplot as plt
# import numpy as np
import pandas as pd
import numpy as np

# 모델 불러오기
model = keras.models.load_model('C:\\Users\\he125\\OneDrive\\바탕 화면\\Dev\\Git\\inssa-food-client\\flaskServer\\foodie_vgg19_1_9075.h5')

model.summary()


 
pd.options.display.float_format = '{:.5f}'.format
pd.reset_option('display.float_format')

img_path = 'C:\\Users\\he125\\OneDrive\\바탕 화면\\Dev\\Git\\inssa-food-client\\flaskServer\\tpk.jpg'
img = image.load_img(img_path, target_size=(224, 224))
x = image.img_to_array(img)
x = np.expand_dims(x, axis=0)
x = preprocess_input(x)
features = model.predict(x)
print(features) 
# plt.imshow(features[0,:,:,3]) # 4번째 피쳐맵(특징)을 그려보자. cf. 0부터 시작하기에 4번째임.
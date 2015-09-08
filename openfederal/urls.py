from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.conf import settings
from openfederal.views import IndexView

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^index/', IndexView.as_view(), name='index')

]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns += patterns(
        'django.contrib.staticfiles.views',
        url(r'^static/(?P<path>.*)$', 'serve'),
        url(r'^__debug__/', include(debug_toolbar.urls)),
    )
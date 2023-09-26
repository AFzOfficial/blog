import markdown as md
import bleach

from django import template
from django.template.defaultfilters import stringfilter
# from django.utils.html import escape

register = template.Library()

@register.filter
@stringfilter
def markdown(value):
    return md.markdown(bleach.clean(value), extensions=['markdown.extensions.fenced_code'])
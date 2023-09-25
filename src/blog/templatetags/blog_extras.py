import markdown as md

from django import template
from django.template.defaultfilters import stringfilter
from django.utils.html import escape

register = template.Library()

@register.filter
@stringfilter
def markdown(value):
    return md.markdown(escape(value), extensions=['markdown.extensions.fenced_code'])
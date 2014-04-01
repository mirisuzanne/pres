pres
====

css presentation thingy

Development
-----------

If you want to run this project in a `virtualenv`_ to isolate it from other
Python projects on your system, create a virtualenv and activate it.  Then run
``pip install -r source/requirements.txt`` to install the dependencies for this
project into your Python environment.

The site templates are in ``source/templates/``, and static files are in
``static/``.

To build a template, ``cd`` into the ``source/`` directory and run ``./build
somename``; this will render ``source/templates/somename.j2`` to
``somename.html``. The given name can also include slashes; so ``./build
some/name`` will render ``source/templates/some/name.j2`` to
``some/name.html``.

.. _virtualenv: http://www.virtualenv.org

To install the necessary Ruby gems for Compass/Sass development, first
``gem install bundler``, then ``cd`` into the ``source/`` directory and run
``bundle install``. Update the ``Gemfile`` if newer gems should be used.

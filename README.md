pres
====

css presentation thingy

Development
-----------

If you want to run this project in a `virtualenv`_ to isolate it from other
Python projects on your system, create a virtualenv and activate it.  Then run
``pip install -r requirements.txt`` to install the dependencies for this
project into your Python environment.

The site templates are in ``templates/``, and static files are in ``static/``.

To view the site live locally, run ``make serve`` and visit
``http://localhost:5000`` in your browser.

To regenerate the site as static HTML files,
run ``make build``.

.. _virtualenv: http://www.virtualenv.org

To install the necessary Ruby gems for Compass/Sass development,
first ``gem install bundler``, then ``bundle install``.
Update the ``Gemfile`` if newer gems should be used.

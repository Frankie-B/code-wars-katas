JsKoansReporter = function(doc) {
    this.document = doc || document;
    this.suiteDivs = {};
    this.failedSpecs = 0;

    this.noOfSubjects = 0;
    this.failedSubjects = 0;
};

JsKoansReporter.prototype.createDom = function(type, attrs, childrenVarArgs) {
    const el = document.createElement(type);

    for (let i = 2; i < arguments.length; i++) {
        const child = arguments[i];

        if (typeof child === 'string') {
            el.appendChild(document.createTextNode(child));
        } else if (child) {
            el.appendChild(child);
        }
    }

    for (const attr in attrs) {
        if (attr == 'className') {
            el[attr] = attrs[attr];
        } else {
            el.setAttribute(attr, attrs[attr]);
        }
    }

    return el;
};

JsKoansReporter.prototype.reportRunnerStarting = function(runner) {
    this.outerDiv = this.createDom(
        'div',
        { className: 'jasmine_reporter show-passed' },
        this.createDom('h1', {}, 'Javascript Koans'),
        (this.runnerDiv = this.createDom(
            'div',
            { className: 'runner running' },
            (this.runnerMessageSpan = this.createDom('span', { classname: 'running' }, 'Contemplating naval...')),
            (this.finishedAtSpan = this.createDom('span', { className: 'finished-at' }, ''))
        ))
    );

    this.document.body.appendChild(this.outerDiv);

    const suites = runner.suites();
    for (let i = 0; i < suites.length; i++) {
        const suite = suites[i];
        const suiteDiv = this.createDom(
            'div',
            { className: 'suite' },
            this.createDom(
                'a',
                { className: 'description', href: `?spec=${encodeURIComponent(suite.getFullName())}` },
                this.getSuiteDescription(suite)
            )
        );
        this.suiteDivs[suite.id] = suiteDiv;
        let parentDiv = this.outerDiv;
        if (suite.parentSuite) {
            parentDiv = this.suiteDivs[suite.parentSuite.id];
        }
        parentDiv.appendChild(suiteDiv);
    }

    this.footerDiv = this.createDom(
        'div',
        { className: 'banner' },
        this.createDom(
            'div',
            { className: 'logo' },
            'Test runner: Jasmine',
            this.createDom('span', { className: 'version' }, runner.env.versionString())
        )
    );

    this.outerDiv.appendChild(this.footerDiv);

    this.startedAt = new Date();
};

JsKoansReporter.prototype.reportRunnerResults = function(runner) {
    const results = runner.results();
    const className = 'progress';
    this.runnerDiv.setAttribute('class', className);
    // do it twice for IE
    this.runnerDiv.setAttribute('className', className);
    const specs = runner.specs();
    let specCount = 0;
    for (let i = 0; i < specs.length; i++) {
        if (this.specFilter(specs[i])) {
            specCount++;
        }
    }

    let enlightenmentMessage;
    if (this.failedSpecs === 0) {
        status = 'passed';
        enlightenmentMessage = 'Enlightenment!';
    } else {
        status = 'failed';
        enlightenmentMessage = 'You have not yet reached enlightenment...';
    }

    const suitesCount = runner.suites().length;
    const specsCount = runner.specs().length;
    let showPassed;
    let showAllFailed;

    const progress = this.createDom(
        'div',
        {},
        this.createDom('div', { className: `enlightenment-${status}` }, enlightenmentMessage),
        this.createDom(
            'div',
            { className: 'completion' },
            this.createDom(
                'div',
                {},
                this.createDom('span', { className: 'key' }, 'Subjects covered: '),
                this.createDom(
                    'span',
                    { className: 'value' },
                    `${this.noOfSubjects - this.failedSubjects}/${this.noOfSubjects}`
                )
            ),
            this.createDom(
                'div',
                {},
                this.createDom('span', { className: 'key' }, 'Koans learned: '),
                this.createDom(
                    'span',
                    { className: 'value' },
                    `${specsCount - this.failedSpecs}/${runner.specs().length}`
                )
            ),
            this.createDom(
                'div',
                { className: 'options' },
                this.createDom('label', { for: '__jsKoans_showPassed__' }, ' Show passed koans'),
                (showPassed = this.createDom('input', { id: '__jsKoans_showPassed__', type: 'checkbox', checked: '' })),
                this.createDom('label', { for: '__jsKoans_showAllFailed__' }, ' Look ahead'),
                (showAllFailed = this.createDom('input', { id: '__jsKoans_showAllFailed__', type: 'checkbox' }))
            )
        )
    );
    this.runnerMessageSpan.replaceChild(
        this.createDom('div', { className: 'description', href: '?' }, progress),
        this.runnerMessageSpan.firstChild
    );

    const self = this;
    showPassed.onchange = function(evt) {
        if (evt.target.checked) {
            self.outerDiv.className += ' show-passed';
        } else {
            self.outerDiv.className = self.outerDiv.className.replace(/ show-passed/, '');
        }
    };
    showAllFailed.onchange = function(evt) {
        if (evt.target.checked) {
            self.outerDiv.className += ' show-skipped';
        } else {
            self.outerDiv.className = self.outerDiv.className.replace(/ show-skipped/, '');
        }
    };
};

JsKoansReporter.prototype.reportSuiteResults = function(suite) {
    const results = suite.results();
    let status = results.passed() ? 'passed' : 'failed';
    if (results.totalCount == 0 || this.failedSubjects > 0) {
        status += '-skipped';
    }

    if (suite.parentSuite == null) {
        this.noOfSubjects += 1;
        if (this.failedSpecs > 0) {
            this.failedSubjects += 1;
        }
    }

    this.suiteDivs[suite.id].className += ` ${status}`;
};

JsKoansReporter.prototype.reportSpecStarting = function(spec) {};

JsKoansReporter.prototype.reportSpecResults = function(spec) {
    const results = spec.results();
    const status = results.passed() ? 'passed' : 'failed';
    let skipStatus = status;
    if (results.skipped || this.failedSpecs > 0) {
        skipStatus += '-skipped';
    }

    let description;
    if (!results.passed()) {
        this.failedSpecs += 1;

        description = `It ${spec.description}. It is damaging your karma.`;
    } else {
        description = `Knowing it ${spec.description} has expanded your awareness.`;
    }

    const specDiv = this.createDom(
        'div',
        { className: `spec ${skipStatus}` },
        this.createDom(
            'a',
            { className: `run_spec_${status}`, href: `?spec=${encodeURIComponent(spec.getFullName())}` },
            'meditate again'
        ),
        this.createDom(
            'a',
            {
                className: 'description',
                href: `?spec=${encodeURIComponent(spec.getFullName())}`,
                title: spec.getFullName(),
            },
            description
        )
    );

    const resultItems = results.getItems();
    const messagesDiv = this.createDom('div', { className: 'messages' });

    for (var i = 0; i < resultItems.length; i++) {
        const result = resultItems[i];

        if (result.type == 'expect' && result.passed && !result.passed()) {
            messagesDiv.appendChild(this.createDom('div', { className: 'errorMessage' }, result.message));
            messagesDiv.appendChild(
                this.createDom('div', { className: 'description' }, 'Please meditate on the following code:')
            );

            if (result.trace.stack) {
                const lines = result.trace.stack.split('\n');
                let stack = lines[0];
                for (var i = 1; i < lines.length; i++) {
                    if (lines[i].search('/koans/') != -1) {
                        stack += `\n${lines[i]}`;
                    }
                }
                messagesDiv.appendChild(this.createDom('div', { className: 'stackTrace' }, stack.trim()));
            }

            break;
        }
    }
    if (messagesDiv.childNodes.length > 0) {
        specDiv.appendChild(messagesDiv);
    }

    this.suiteDivs[spec.suite.id].appendChild(specDiv);
};

JsKoansReporter.prototype.log = function() {
    const { console } = jasmine.getGlobal();
    if (console && console.log) console.log.apply(console, arguments);
};

JsKoansReporter.prototype.getLocation = function() {
    return this.document.location;
};

JsKoansReporter.prototype.specFilter = function(spec) {
    const paramMap = {};
    const params = this.getLocation()
        .search.substring(1)
        .split('&');
    for (let i = 0; i < params.length; i++) {
        const p = params[i].split('=');
        paramMap[decodeURIComponent(p[0])] = decodeURIComponent(p[1]);
    }

    if (!paramMap.spec) return true;
    return spec.getFullName().indexOf(paramMap.spec) == 0;
};

JsKoansReporter.prototype.getSuiteDescription = function(suite) {
    if (suite.parentSuite === null) {
        return `Thinking ${suite.description}`;
    }
    return `Considering ${suite.description}`;
};

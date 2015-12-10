angular-err-src
=======================

```
npm install --save angular-err-src
```

# Example integration

```
angular.module('app', ['angular-err-src'])
```

and in your views you can use it like this:

```
img(ng-src="{{vm.image}}", err-src="https://placeholdit.imgix.net/~text?txtsize=33&txt=Preview+currently+unavailable&w=300&h=220")
```

# UMD

This is an [UMD](https://github.com/umdjs/umd) package.

# License

Do whatever you please with this.

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
input(type="password", ng-model="vm.password", name="password", ng-minlength="vm.passwordMinlength", required)
input(type="password", ng-model="vm.confirmPassword", name="confirmPassword", equal="vm.password", required)
```

# UMD

This is an [UMD](https://github.com/umdjs/umd) package.

# License

Do whatever you please with this.

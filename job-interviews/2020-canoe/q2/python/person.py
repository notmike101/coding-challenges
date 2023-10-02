class Person:
  _name = ""
  _mouthOpen = False
  _isDoctor = False

  def __init__(self, name, isDoctor = False):
    self._name = name
    self._isDoctor = isDoctor

  def get_name(self):
    return self._name

  def get_mouthOpen(self):
    return self._mouthOpen

  def get_isDoctor(self):
    return self._isDoctor

  def promoteToDoctor(self):
    self._isDoctor = True

  def requestMouthOpen(self, commander):
    if commander.get_isDoctor or commander == self:
      self._openMouth()

  def requestMouthClose(self, commander):
    if commander.get_isDoctor or commander == self:
      self._closeMouth()
    
  def _openMouth(self):
    self._mouthOpen = True

  def _closeMouth(self):
    self._mouthOpen = False
import sys
from PySide6.QtWidgets import (QApplication, QMainWindow, QWidget, QVBoxLayout, 
                              QHBoxLayout, QLabel, QPushButton, QLineEdit, QScrollArea,
                              QSlider, QFrame)
from PySide6.QtCore import Qt, QTimer, QUrl
from PySide6.QtGui import QPixmap, QFont, QColor
from PySide6.QtMultimedia import QMediaPlayer, QAudioOutput
import requests
import json

class RapHubWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Rap Hub — Новая школа русского рэпа")
        self.setMinimumSize(1480, 920)
        self.player = QMediaPlayer()
        self.audio_output = QAudioOutput()
        self.player.setAudioOutput(self.audio_output)
        
        self.setStyleSheet("""
            QMainWindow { background-color: #0a0a0a; color: #ffffff; }
            QPushButton { border-radius: 12px; padding: 12px; font-size: 15px; }
            QPushButton:hover { background-color: #6600cc; }
        """)
        
        central = QWidget()
        self.setCentralWidget(central)
        main_layout = QVBoxLayout(central)
        
        # Header
        header = QFrame()
        header.setStyleSheet("background: rgba(20,20,30,0.95); border-bottom: 1px solid #330066;")
        header_layout = QHBoxLayout(header)
        logo = QLabel("RAP HUB")
        logo.setStyleSheet("font-size: 32px; font-weight: bold; color: #cc00ff; letter-spacing: 2px;")
        search = QLineEdit()
        search.setPlaceholderText("Поиск артистов, треков, альбомов... (MZLFF)")
        search.setMinimumWidth(500)
        search.textChanged.connect(self.search)
        
        header_layout.addWidget(logo)
        header_layout.addWidget(search)
        header_layout.addStretch()
        main_layout.addWidget(header)
        
        # Banner
        banner = QLabel("MZLFF — PHANTASMAGORIA (2025) 🔥")
        banner.setStyleSheet("background: linear-gradient(135deg, #1a0033, #4b0082); font-size: 28px; padding: 40px; border-radius: 16px; margin: 20px;")
        banner.setAlignment(Qt.AlignmentFlag.AlignCenter)
        main_layout.addWidget(banner)
        
        scroll = QScrollArea()
        scroll.setWidgetResizable(True)
        content = QWidget()
        content_layout = QVBoxLayout(content)
        
        # Popular tracks MZLFF
        content_layout.addWidget(QLabel("<h2>Треки MZLFF</h2>"))
        
        tracks = [
            "КАЧ", "для тебя", "потерянный мир", "всем вернётся", 
            "ghost", "night drive", "паранойя", "моя луна", 
            "PHANTASMAGORIA", "cloud9"
        ]
        
        for track in tracks:
            btn = QPushButton(f"▶ {track}")
            btn.setStyleSheet("background: #1f1f2e; text-align: left;")
            btn.clicked.connect(lambda checked, t=track: self.play_track(t))
            content_layout.addWidget(btn)
        
        content_layout.addWidget(QLabel("<h3>Альбомы</h3>"))
        albums = ["PHANTASMAGORIA (2025)", "светлая сторона (2024)", "не забытое старое"]
        for album in albums:
            alb_btn = QPushButton(album)
            alb_btn.clicked.connect(lambda checked, a=album: self.play_album(a))
            content_layout.addWidget(alb_btn)
        
        scroll.setWidget(content)
        main_layout.addWidget(scroll)
        
        # Player bar
        player_bar = QFrame()
        player_bar.setStyleSheet("background: #1a1a2e; padding: 10px;")
        player_layout = QHBoxLayout(player_bar)
        self.now_playing = QLabel("Сейчас играет: —")
        self.progress = QSlider(Qt.Orientation.Horizontal)
        self.progress.setRange(0, 100)
        play_btn = QPushButton("⏸")
        play_btn.clicked.connect(self.toggle_play)
        
        player_layout.addWidget(self.now_playing)
        player_layout.addWidget(self.progress)
        player_layout.addWidget(play_btn)
        main_layout.addWidget(player_bar)
        
        self.current_track = None
        self.show()

    def search(self, text):
        if len(text) > 2:
            print(f"Поиск: {text}")

    def play_track(self, track_name):
        self.current_track = track_name
        self.now_playing.setText(f"Сейчас играет: MZLFF — {track_name}")
        print(f"▶ Воспроизведение: {track_name}")

    def play_album(self, album):
        print(f"🎵 Запуск альбома: {album}")

    def toggle_play(self):
        print("Плей/Пауза")

if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = RapHubWindow()
    sys.exit(app.exec())